<div class="form-group {{ $errors->has('canal') ? 'has-error' : ''}}">
    {!! Form::label('canal', 'Canal', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::text('canal', null, ['class' => 'form-control']) !!}
        {!! $errors->first('canal', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('reng') ? 'has-error' : ''}}">
    {!! Form::label('reng', 'Reng', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::text('reng', null, ['class' => 'form-control']) !!}
        {!! $errors->first('reng', '<p class="help-block">:message</p>') !!}
    </div>
</div>

<div class="form-group">
    <div class="col-md-offset-4 col-md-4">
        {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
    </div>
</div>
