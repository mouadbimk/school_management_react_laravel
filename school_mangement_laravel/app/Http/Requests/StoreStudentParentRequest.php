<?php

namespace App\Http\Requests;

use App\Enums\BloodEnum;
use App\Models\StudentParent;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreStudentParentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'firstname' => 'required|string|max:50',
            'lastname' => 'required|string|max:50',
            'date_of_birth' => 'required|date',
            'gender' => ['required',Rule::in(['m','f'])],
            'blood_type' => ['required',Rule::enum(BloodEnum::class)],
            'address' => 'required|string|max:255',
            'phone' => 'required|max:10|unique:'. StudentParent::class,
            'email' => 'required|email|unique:' . StudentParent::class,
            'password' => 'required|string|min:8|max:50'
        ];
    }
}
