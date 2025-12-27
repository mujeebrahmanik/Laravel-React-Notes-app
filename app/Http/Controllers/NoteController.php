<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Notes;

class NoteController extends Controller
{
    public function index(Request $request){
        $notes = Notes::orderBy('created_at','desc')->paginate(6);
        return response()->json($notes);
    }

    public function store(Request $request){
        $validated = $request -> validate([

            'category' => 'required|string|max:50',
            'content' => 'required|string|max:200'
        ]);

        $note = Notes::create($validated);

        return response()->json([
            'message'=> 'Note created successfully',
            'data'=> $note,
        ],201);
    }
}
