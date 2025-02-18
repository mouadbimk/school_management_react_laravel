<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentParentResource extends JsonResource
{
    public function toArray(Request $request){
       $parent = parent::toArray($request);
       if(isset($parent['gender'])|| $parent['phone']){
        $parent['gender'] = $parent['gender'] == 'm' ? 'Male': 'Female';
        $parent['phone'] = "+212-" . $parent['phone'];  
       }
       return $parent;
    }
}
