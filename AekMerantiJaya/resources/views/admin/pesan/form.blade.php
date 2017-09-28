<div class="form-group {{ $errors->has('harga') ? 'has-error' : ''}}">
    {!! Form::label('harga', 'Harga', ['class' => 'col-md-4 control-label']) !!}
    
    <div class="col-md-6">
        <select id="select_harga" class="form-control" name="harga">
            {{-- loop all atap --}}
            @foreach($harga as $item)
            <option value="{{ $item->id }}">
            Paket 
                {{ strtoupper($item->id) }}
            </option>
            @endforeach
        </select>
        {!! $errors->first('harga', '<p class="help-block">:message</p>') !!}
        <!-- {!! Form::select('atap', ['Star Roof', 'Longspan'], null, ['class' => 'form-control']) !!}
        {!! $errors->first('atap', '<p class="help-block">:message</p>') !!} -->
    </div>
</div><div class="form-group {{ $errors->has('nama_pemesan') ? 'has-error' : ''}}">
    {!! Form::label('nama_pemesan', 'Nama Pemesan', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::text('nama_pemesan', null, ['class' => 'form-control']) !!}
        {!! $errors->first('nama_pemesan', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('alamat_pemesan') ? 'has-error' : ''}}">
    {!! Form::label('alamat_pemesan', 'Alamat Pemesan', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::text('alamat_pemesan', null, ['class' => 'form-control']) !!}
        {!! $errors->first('alamat_pemesan', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('nomor_pemesan') ? 'has-error' : ''}}">
    {!! Form::label('nomor_pemesan', 'Nomor Pemesan', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::text('nomor_pemesan', null, ['class' => 'form-control']) !!}
        {!! $errors->first('nomor_pemesan', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('note') ? 'has-error' : ''}}">
    {!! Form::label('note', 'Note', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::textarea('note', null, ['class' => 'form-control']) !!}
        {!! $errors->first('note', '<p class="help-block">:message</p>') !!}
    </div>
</div>

<div class="form-group">
    <div class="col-md-offset-4 col-md-4">
        {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Pesan', ['class' => 'btn btn-primary']) !!}
    </div>
</div>
