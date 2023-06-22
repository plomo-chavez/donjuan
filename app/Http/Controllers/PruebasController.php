<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Email\MailController;
use App\Http\Controllers\Configuracion\ReservacionesController;
use Illuminate\Http\Request;
use PDF;

class PruebasController extends Controller
{
    public function generatePDF(){

        $payload = array('reservacion_id' =>20);
        $pdfContent = ReservacionesController::generarPapeleta($payload);
        $response = response($pdfContent, 200, [ 'Content-Type' => 'application/pdf', ]);
        return $response;
    }

    private function generatePDFContent()
    {
        // En este caso, asumimos que tienes Dompdf configurado con el alias 'PDF'

        // Renderiza la vista o el contenido del PDF
        $view = view('pdf.template')->render();

        // Genera el PDF utilizando el alias 'PDF' de Dompdf
        $pdf = PDF::loadHtml($view);

        // Devuelve el contenido del PDF como una cadena
        return $pdf->output();
    }

}
