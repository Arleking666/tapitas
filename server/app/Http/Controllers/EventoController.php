<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use Illuminate\Http\Request;

class EventoController extends Controller
{
    public function index()
    {
        return Evento::all();
    }
    public function store(Request $request)
    {
        $nuevo=new Evento();
        $nuevo->nombre= $request->nombre;
        $nuevo->lugar= $request->lugar;
        $nuevo->objetivo=$request->objetivo;
        $nuevo->horario= $request->horario;
        $nuevo->ubicacion= $request->ubicacion;
        $nuevo->save();
        return response()->json([
            "mensaje"=>"Se guardo correctamente"
        ], 201);
    }
    public function update(Request $request, $id)
    {
        $nuevo= Evento::find($id);
        $nuevo->update($request->all());
        return response()->json([
            "mensaje"=>"Se actualizo correctamente"
        ], 201);
    }
    public function destroy($id)
    {
        return Evento::destroy($id);
    }
}
