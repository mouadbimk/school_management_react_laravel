<?php

namespace App\Http\Requests;

use App\Enums\BloodEnum;
use App\Models\StudentParent;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateStudentParentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $token = auth()->user()->currentAccessToken();
        return $token && in_array('admin',$token->abilities);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $id = $this->route('parent') ? $this->route('parent')->id : null;
        return [
            'firstname' => 'required|string|max:50',
            'lastname' => 'required|string|max:50',
            'date_of_birth' => 'required|date',
            'gender' => ['nullable',Rule::in(['m','f'])],
            'blood_type' => ['required',Rule::enum(BloodEnum::class)],
            'address' => 'required|string|max:255',
            'phone' => [ 'required','max:15',Rule::unique(StudentParent::class)->ignore($id)],
            'email' => ['required','email',Rule::unique(StudentParent::class)->ignore($id)],
            'password' => 'nullable|string|min:8|max:50'
        ];
    }
}
