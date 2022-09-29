<?php

namespace App\Http\Controllers;

use App\Models\Lugar;
use Illuminate\Http\Request;

class LugarController extends Controller
{
    public function index()
    {
        return Lugar::all();
    }
    public function store(Request $request)
    {
        $lugar=new Lugar();
        $lugar->nombre= $request->nombre;
        $lugar->lugar= $request->lugar;
        $lugar->horario= $request->horario;
        $lugar->ubicacion= $request->ubicacion;
        $lugar->save();
        return response()->json([
            "mensaje"=>"Se guardo correctamente"
        ], 201);
    }
    public function update(Request $request, $id)
    {
        $lugar= Lugar::find($id);
        $lugar->update($request->all());
        return response()->json([
            "mensaje"=>"Se actualizo correctamente"
        ], 201);
    }
    public function destroy($id)
    {
        return Lugar::destroy($id);
    }
}
