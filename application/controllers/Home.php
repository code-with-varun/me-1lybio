<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		$this->load->view('portfolio_view');
	}
	public function user_portfolio()
	{
		$this->load->view('portfolio_view');
	}
}
