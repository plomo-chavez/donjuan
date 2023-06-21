<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Email\MailController;
use Illuminate\Http\Request;
use PDF;

class PruebasController extends Controller
{
    public function generatePDF(){
        try {
            // $pdf = PDF::loadView('pdf.template', $data);
            // return $pdf->download('archivo.pdf');

            $pdf = PDF::loadHtml('<h1>Este es un PDF de prueba</h1>');
            return $pdf->download('archivo.pdf');
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

}
