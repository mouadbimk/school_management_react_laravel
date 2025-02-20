<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    public function toArray(Request $request){
        $parent = parent::toArray($request);
        if(isset($parent['gender'])){
            $parent['gender'] = $parent['gender'] == 'm'? 'Male': 'Female';
        }
        return $parent;
    }
}
