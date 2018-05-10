@extends('layouts.login')

@section('content')
    <div class="page-container">
        <div class="page-content">
            <div class="content-wrapper">
                <div class="content">
                    <form method="post" action="{{ route('login') }}">
                        @csrf
                        <div class="panel panel-body login-form">
                            <div class="text-center">
                                <div id="logo" class="p-b-30 padding-20">
                                    <img class="img-fluid" src="{{ asset('images/django.png') }}" title="Django">
                                </div>

                                <div class="p-b-20">
                                    <small class="display-block">Entrez vos identifiants pour vous connecter</small>
                                </div>
                            </div>

                            <div class="form-group has-feedback has-feedback-left">
                                <input type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                       name="email" value="{{ old('email') }}" placeholder="Adresse e-mail"
                                       required autofocus>
                                <div class="form-control-feedback">
                                    <i class="icon-user text-muted"></i>
                                </div>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>

                            <div class="form-group has-feedback has-feedback-left">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                       placeholder="Mot de passe" name="password" required>
                                <div class="form-control-feedback">
                                    <i class="icon-lock2 text-muted"></i>
                                </div>
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>

                            <div class="form-group login-options">
                                <label class="checkbox-inline">
                                    <input type="checkbox" name="remember" class="styled" {{ old('remember') ? 'checked' : '' }}>
                                    Se souvenir de moi
                                </label>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn bg-primary-400 btn-block">Connexion <i class="icon-arrow-right14 position-right"></i></button>
                            </div>
                            <div class="text-center">
                                <small class="text-grey-300">&copy; 2018. <a href="#">Django App</a> by Romain Sola</small>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
