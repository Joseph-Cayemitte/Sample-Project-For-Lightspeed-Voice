<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index($project)
    {
        $projectname = Project::whereproject($project)->first();
        // return $projectname;
        return $projectname;
        // return $user;
        // return Project::all();
    }
}
