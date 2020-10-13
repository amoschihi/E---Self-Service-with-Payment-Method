<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\User;
use App\Mail\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\UserCollection;

class AuthController extends Controller
{
    /**
     * Handles Registration Request
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'name' => 'required|min:3', 
            'email' => 'required|email|unique:users', 
            'password' => 'required|min:6', 
            'confirm_password' => 'required|same:password', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
 
        $token = $user->createToken('accessToken')->accessToken;
 
        return response()->json(['token' => $token], 200);
    }
 
    /**
     * Handles Login Request
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if(password_verify($request->password, $user->password)) {
                $token = $user->createToken('accessToken')->accessToken;
                return response()->json(['token' => $token], 200);
            }else {
                return response()->json(['error' => 'Incorrect password'], 401);
            }
        } else {
            return response()->json(['error' => 'User not found'], 401);
        }
    }
 
    /**
     * Returns Authenticated User Details
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function user()
    {
        return response()->json(['data' => auth()->user()], 200);
    }

    /**
     * Password Reset
     *  
     */
    public function resetPassword(Request $request) 
    {
        // validate email

        if(!$this->validEmail($request->email)) {
            return response()->json([
                'error' => 'Email provided does\'nt exist in our database'
            ], 404);
        }

        // send email
        $token = $this->token($request->email);

        Mail::to($request->email)->send(new PasswordReset($token));

        return response()->json([
            'data' => 'Password reset link has been sent to your email, please check your inbox',
        ], 200);
        
    }

    public function changePassword(Request $request) {
        //check if token is valid
        $reset = DB::table('password_resets')->where([
            'token'=>$request->token, 
            'email'=>$request->email
            ])->first();
        if($reset->count() == 0) {
            return response()->json(['error'=>'Invalid token or email'],401);
        }

        $validator = Validator::make($request->all(), [ 
            'email' => 'required|email|unique:users', 
            'password' => 'required|min:6', 
            'confirm_password' => 'required|same:password', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        $user = User::where('email', $request->email)->first();
        
        $user->password = \bcrypt($request->password);
        $user->save();

        //remove the token now
        $reset->delete();

        return response()->json([
            'data' => 'You have successfully changed your password',
        ], 200);
    }

    // create token

    public function token($email) {
        $old = DB::table('password_resets')->where('email', $email)->first();
        if($old) {
            return $old;
        }
        $token = Str::random(40);
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token
        ]);
        return $token;
    }

    public function validEmail($email) {
        return !!User::where('email', $email)->first();
    }
}
