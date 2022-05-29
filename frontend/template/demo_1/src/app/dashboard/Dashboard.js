import React, { Component } from 'react';
import { ProgressBar, ButtonToolbar, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { Dropdown, Tabs, Tab, Row } from 'react-bootstrap';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './Dashboard.css'
import { Link, withRouter } from 'react-router-dom';







export class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auto: true,
    };
  }

  products = [
    {'id': 1, 'function': 'aaaaaaa', 'arduino': 11111111, 'status': 'On', 'toggle': 'On'},
    {'id': 2, 'function': 'aaaaaaa', 'arduino': 11111111, 'status': 'Off', 'toggle': 'On'},
  ];
  
  
  
  
  columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'function',
    text: 'Function'
  }, {
    dataField: 'arduino',
    text: 'Arduino'
  },
  {
    dataField: 'status',
    text: 'Status'
  },
  {
    dataField: 'toggle',
    text: 'Toggle On/Off'
  }];

  
  render () {

    const productInTable = [
      {'id': 1, 'function': 'Fan Control', 'arduino': 7, 'status': 'On', 'toggle': this.state.auto == true ? <Button>Auto</Button> :(this.products[0]['status'] == 'Off' ? <Button>Off</Button> : <Button>On</Button>)},
      {'id': 2, 'function': 'Mist Control', 'arduino': 8, 'status': 'Off', 'toggle': this.state.auto == true ? <Button>Auto</Button> :(this.products[1]['status'] == 'Off' ? <Button>Off</Button> : <Button>On</Button>)},
    ]
    
    const showManual = () => {
      this.setState({auto: false})
      if (document.querySelector('.manualForm') !== null){
        document.querySelector('.manualForm').classList.remove('hideManual');
      }
    }
    
    const hideManual = () =>{
      this.setState({auto: true})
      if (document.querySelector('.manualForm') !== null){
        document.querySelector('.manualForm').classList.add('hideManual');
      }
    }
    
    
    return (
      <div>
        <div>
          <div className="d-sm-flex justify-content-between align-items-start">
            <h2 className="text-dark font-weight-bold mb-2"> Overview dashboard </h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="justify-content-between align-items-center tab-transparent">
                <Tabs defaultActiveKey="garden1" className="nav">
                  
                  <Tab eventKey="garden1" title="Garden 1">
                    <div>
                      <div className="row">
                        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                          <Link to="/basic-ui/soil" style={{ color: 'inherit', textDecoration: 'inherit'}} >
                          <div className="card">
                            <div className="card-body text-center">
                              <h5 className="mb-2 text-dark font-weight-normal">Soil Moisture</h5>
                              <h2 className="mb-4 text-dark font-weight-bold">1%</h2>
                              <div className="px-4 d-flex align-items-center">
                                <svg width="0" height="0">
                                  <defs>
                                    <linearGradient id="progress-order">
                                      <stop offset="0%" stopColor="#1579ff"/>
                                      <stop offset="100%" stopColor="#7922e5"/>
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <CircularProgressbarWithChildren className="progress-order"
                                value={70}>
                                  <div>
                                    <i className="mdi mdi-waves icon-md absolute-center text-dark"></i>
                                  </div>
                                </CircularProgressbarWithChildren>
                              </div>
                              <p className="mt-4 mb-0">Incsreased by </p>
                              <h3 className="mb-0 font-weight-bold mt-2 text-dark">0.1%</h3>
                            </div>
                          </div>
                          </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                          <Link to="/basic-ui/air" style={{ color: 'inherit', textDecoration: 'inherit'}} >
                          <div className="card">
                            <div className="card-body text-center">
                              <h5 className="mb-2 text-dark font-weight-normal">Air</h5>
                              <h2 className="mb-4 text-dark font-weight-bold">756,00</h2>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                      <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#b4ec51"/>
                                        <stop offset="100%" stopColor="#429321"/>
                                      </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbarWithChildren className="progress-visitors"
                                value={60}>
                                  <div>
                                    <i className="mdi mdi-weather-rainy icon-md absolute-center text-dark"></i>
                                  </div>
                                </CircularProgressbarWithChildren>
                                </div>
                              <p className="mt-4 mb-0">Increased since yesterday</p>
                              <h3 className="mb-0 font-weight-bold mt-2 text-dark">50%</h3>
                            </div>
                          </div>
                          </Link>
                        </div>
                        <div className="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                        <Link to="/basic-ui/temperature" style={{ color: 'inherit', textDecoration: 'inherit'}} >
                          <div className="card">
                            <div className="card-body text-center">
                              <h5 className="mb-2 text-dark font-weight-normal">Temperature</h5>
                              <h2 className="mb-4 text-dark font-weight-bold">100,38</h2>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                      <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#fad961"/>
                                        <stop offset="100%" stopColor="#f76b1c"/>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <CircularProgressbarWithChildren className="progress-impressions"
                                  value={90}>
                                    <div>
                                      <i className="mdi mdi-coolant-temperature icon-md absolute-center text-dark"></i>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                </div>                              
                              <p className="mt-4 mb-0">Increased since yesterday</p>
                              <h3 className="mb-0 font-weight-bold mt-2 text-dark">35%</h3>
                            </div>
                          </div>
                        </Link>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <Link to="/basic-ui/light" style={{ color: 'inherit', textDecoration: 'inherit'}} >

                          <div className="card">
                            <div className="card-body text-center">
                              <h5 className="mb-2 text-dark font-weight-normal">Light intensity</h5>
                              <h2 className="mb-4 text-dark font-weight-bold">4250k</h2>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                      <linearGradient id="progress-followers" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#f5515f"/>
                                        <stop offset="100%" stopColor="#9f041b"/>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <CircularProgressbarWithChildren className="progress-followers"
                                  value={45}>
                                    <div>
                                      <i className="mdi mdi-weather-sunny icon-md absolute-center text-dark"></i>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                </div>  
                              <p className="mt-4 mb-0">Decreased since yesterday</p>
                              <h3 className="mb-0 font-weight-bold mt-2 text-dark">25%</h3>
                            </div>
                          </div>
                        </Link>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 grid-margin">

                          <div className="card">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="card-title">Device Control</h4>
                                    <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">
                                      <div className="btn-group d-none d-xl-flex bg-white p-3" role="group" aria-label="Basic example">

                                        <button onClick={hideManual} type="button" className="btn btn-link  border-right" >Automatic</button>
                                        <button onClick={showManual} type="button" className="btn btn-link " >Manual</button>
                                      </div>
                                    </div>
                                  </div>
                                  <Form className='manualForm'>
                                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                      <InputGroup>
                                        <InputGroup.Text id="btnGroupAddon">Soil Moisture</InputGroup.Text>
                                        <FormControl
                                          type="number"
                                          placeholder="soil moisture"
                                          aria-label="soil"
                                          aria-describedby="btnGroupAddon"
                                        />
                                        <InputGroup.Text id="btnGroupAddon">Air</InputGroup.Text>
                                        <FormControl
                                          type="number"
                                          placeholder="air"
                                          aria-label="air"
                                          aria-describedby="btnGroupAddon"
                                        />
                                        <InputGroup.Text id="btnGroupAddon">Temperature</InputGroup.Text>
                                        <FormControl
                                          type="number"
                                          placeholder="temperature"
                                          aria-label="temperature"
                                          aria-describedby="btnGroupAddon"
                                        />
                                        <InputGroup.Text id="btnGroupAddon">Light intensity</InputGroup.Text>
                                        <FormControl
                                          type="number"
                                          placeholder="light"
                                          aria-label="Input group example"
                                          aria-describedby="btnGroupAddon"
                                        />
                                      </InputGroup>
                                    </ButtonToolbar>
                                    <Button variant="primary" type="submit">
                                      Submit
                                    </Button>
                                  </Form>
                                  <BootstrapTable keyField='id' data={productInTable } columns={ this.columns } />
                                  
                                  
                                </div>
                                
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="garden2" title="Garden 2" className="test-tab" >
                    <p>1</p>  
                  </Tab>
                  {/* <Tab eventKey="Performance" title="Performance" >
                  <p>3</p>
                  </Tab>
                  <Tab eventKey="Conversion" title="Conversion">
                  <p>4</p>
                  </Tab> */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}
export default Dashboard ;