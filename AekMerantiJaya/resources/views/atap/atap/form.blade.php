<div class="form-group {{ $errors->has('jenis') ? 'has-error' : ''}}">
    {!! Form::label('jenis', 'Jenis', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::text('jenis', null, ['class' => 'form-control']) !!}
        {!! $errors->first('jenis', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('ukuran') ? 'has-error' : ''}}">
    {!! Form::label('ukuran', 'Ukuran', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::text('ukuran', null, ['class' => 'form-control']) !!}
        {!! $errors->first('ukuran', '<p class="help-block">:message</p>') !!}
    </div>
</div>

<div class="form-group">
    <div class="col-md-offset-4 col-md-4">
        {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
    </div>
</div>
