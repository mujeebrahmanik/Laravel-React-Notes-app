<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Notes;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class NoteController extends Controller
{
    public function index(Request $request){
        $notes = Notes::with('user')->where('user_id',auth()->id())->orderBy('created_at','desc')->paginate(6);
        return response()->json($notes);
    }

    public function store(Request $request){
        $validated = $request -> validate([

            'task' => 'required|string|max:50',
            'status' => 'sometimes|in:pending,in process,completed',

        ]);

        $note = Notes::create([
            'task' => $validated['task'],
            'status' => $validated['status'] ?? 'pending',
            'user_id' => $request->user()->id,
        ]);

        return response()->json([
            'message'=> 'Note created successfully',
            'data'=> $note,
        ],201);
    }


    public function update(Request $request,$id){
        $note = Notes::findOrFail($id);

        $validated = $request -> validate([
            'task' => 'required|string|max:50',
            'status' => 'sometimes|in:pending,in process,completed'
        ]);

        $note->update($validated);

        return response()->json([
            'message' => 'note updated successfully',
            'data' => $note
        ],200);

    }
}
