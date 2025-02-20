<?php

namespace App\Http\Controllers;

use App\Models\StudentParent;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\StudentParentResource;
use App\Http\Requests\StoreStudentParentRequest;
use App\Http\Requests\UpdateStudentParentRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class StudentParentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): AnonymousResourceCollection
    {
        return StudentParentResource::collection(StudentParent::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentParentRequest $request): JsonResponse
    {
        $formFields = $request->validated();
        $formFields['last_login_date'] = now();
        $formFields['password'] = Hash::make($request['password']);
        $parent = StudentParent::create($formFields);
        $response = new StudentParentResource($parent);
        return response()->json([
            'parent' => $response,
            'message' => __('The Parent has Been created successfully'),
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(StudentParent $studentParent)
    {
    }
    //
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentParentRequest $request, StudentParent $parent): JsonResponse
    {
        $data = $request->validated();
        if(empty($data['password'])){
            $data['password'] = $parent->password;
        }else{
            $data['password'] = Hash::make($data['password']);
        }
        $data['phone'] = str_replace("+212-","",$data["phone"]);
        $parent->update($data);
        return response()->json([
            'parent'=> $parent,
            'message' => __('User has Been Updated successfully')
        ],200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StudentParent $parent)
    {
       //$studentParent->delete();
       return new StudentParentResource($parent);
    }
}
