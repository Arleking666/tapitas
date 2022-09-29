<?php

namespace App\Http\Controllers;

use App\Models\Publicidad;
use Illuminate\Http\Request;

class PublicidadController extends Controller
{
    public function index()
    {
        return Publicidad::all();
    }
    public function store(Request $request)
    {
        $nuevo=new Publicidad();
        $nuevo->nombre= $request->nombre;
        $nuevo->logo= $request->logo;
        $nuevo->promocion=$request->promocion;
        $nuevo->save();
        return response()->json([
            "mensaje"=>"Se guardo correctamente"
        ], 201);
    }
    public function update(Request $request, $id)
    {
        $nuevo= Publicidad::find($id);
        $nuevo->update($request->all());
        return response()->json([
            "mensaje"=>"Se actualizo correctamente"
        ], 201);
    }
    public function destroy($id)
    {
        return Publicidad::destroy($id);
    }
}
