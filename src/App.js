import React from 'react';
import { Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import { fetchData } from './api';
 


import coronaImage from '../src/images/covid_image1.jpg';

class App extends React.Component{
  state = {
    data: {},
    country: '',
  }

async componentDidMount() {
  const fetchedData = await fetchData();

 this.setState({ data: fetchedData });
}

handleCountryChange = async (country) => {
  const fetchedData = await fetchData(country);

  this.setState({ data: fetchedData, country: country });
}

  render(){
    const { data, country } =  this.state; 
    return(
      <div className={styles.container}>
       <img className={ styles.image } src={ coronaImage } alt="COVID-19"/>
       <Cards data={ data }/>
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Chart data={data} country={country}/>
       <h3> -Taniya Rane <br/> Web Designer And Devloper </h3>
       
      </div>
    );
  }
}


export default App;
