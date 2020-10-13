@component('mail::message')
# Reset Password

We received a request to change your password. 
Click the reset button below to reset your password. Ignore this request if it was not you.

@component('mail::button', ['url' => 'http://localhost:4200/password-reset?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
