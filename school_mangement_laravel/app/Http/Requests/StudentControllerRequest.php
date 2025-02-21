<?php

namespace App\Http\Requests;

use App\Enums\BloodEnum;
use App\Http\Controllers\StudentController;
use App\Models\StudentParent;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StudentControllerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $id = $this->route('student') ? $this->route('student')->id : null;
        return [
            'name' => 'required|string|50',
            'email'=> ['required','email',Rule::unique(User::class)->ignore($id)],
            'phone' => ['required','string','max:15','min:10',Rule::unique(User::class)->ignore($id)],
            'blood_type' => ['required',Rule::enum(BloodEnum::class)],
            'date_of_birth' => 'required|date',
            'address'=> 'required|string|max:255',
            'gender' => 'nullable',Rule::in(['m','f']),
            'student_parent_id'=> 'nullable','exists' . StudentParent::class,
        ];
    }
}
