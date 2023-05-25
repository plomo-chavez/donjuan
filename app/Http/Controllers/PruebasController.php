<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Email\MailController;
use Illuminate\Http\Request;
use PDF;

class PruebasController extends Controller
{

    // $pdf->save(storage_path('app/public/archivo.pdf'));
public function generatePDF(){
    try {


        $mailController = new MailController();
        $mailController->enviar();
        // $data = [
        //     'title' => 'Mi primer PDF en Laravel',
        //     'content' => 'Contenido del PDF...'
        // ];
        // $pdf = PDF::loadView('pdf.template', $data);
        // // return $pdf->download('archivo.pdf');

        // // $pdf = PDF::loadHtml('<h1>Este es un PDF de prueba</h1>');
        // return $pdf->download('archivo.pdf');
        // // return response($pdf->output(), 200)
        // // ->header('Content-Type', 'application/pdf')
        // // ->header('Content-Disposition', 'inline; filename="archivo.pdf"');

    // $pdf->save(storage_path('app/public/archivo.pdf'));
    } catch (\Exception $e) {
        dd($e->getMessage());
    }
}

}
