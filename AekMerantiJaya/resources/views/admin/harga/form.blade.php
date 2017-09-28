<div class="form-group {{ $errors->has('atap') ? 'has-error' : ''}}">
    {!! Form::label('atap', 'Atap', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        <select id="selectatap" class="form-control" name="atap">
            {{-- loop all atap --}}
            @foreach($ataps as $atap)
            <option value="{{ $atap->id }}">
                {{ strtoupper($atap->jenis) }}
                {{ strtoupper($atap->ukuran) }}
            </option>
            @endforeach
        </select>
        {!! $errors->first('atap', '<p class="help-block">:message</p>') !!}
        <!-- {!! Form::select('atap', ['Star Roof', 'Longspan'], null, ['class' => 'form-control']) !!}
        {!! $errors->first('atap', '<p class="help-block">:message</p>') !!} -->
    </div>
</div><div class="form-group {{ $errors->has('canal') ? 'has-error' : ''}}">
    {!! Form::label('canal', 'Canal', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        <!-- {!! Form::select('canal', ['Zincalume', 'Gulvanie'], null, ['class' => 'form-control']) !!} -->
        <select id="selectcanal" class="form-control" name="canal">
            {{-- loop all atap --}}
            @foreach($canals as $canal)
            <option value="{{ $canal->id }}">
                {{ strtoupper($canal->canal) }}
                {{ $canal->reng }}
            </option>
            @endforeach
            
        </select>
        {!! $errors->first('canal', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('hargaRabung1') ? 'has-error' : ''}}">
    {!! Form::label('hargaRabung1', 'Hargarabung 1', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::number('hargaRabung1', null, ['class' => 'form-control']) !!}
        {!! $errors->first('hargaRabung1', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('hargaRabung5') ? 'has-error' : ''}}">
    {!! Form::label('hargaRabung5', 'Hargarabung 5', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::number('hargaRabung5', null, ['class' => 'form-control']) !!}
        {!! $errors->first('hargaRabung5', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('keteranga') ? 'has-error' : ''}}">
    {!! Form::label('keteranga', 'Keteranga', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::textarea('keteranga', null, ['class' => 'form-control']) !!}
        {!! $errors->first('keteranga', '<p class="help-block">:message</p>') !!}
    </div>
</div>

<div class="form-group">
    <div class="col-md-offset-4 col-md-4">
        {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
    </div>
</div>
