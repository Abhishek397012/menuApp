import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EachItem from './Component/EachItem';


const data = [
  {
    id: '1',
    heading: 'Main Course',
    items: [
      {
        name: 'Chilli Paneer(Dry/Gravy)',
        price: 300
      },
      {
        name: 'Chilli Mashroom(Dry/Gravy)',
        price: 300
      },
      {
        name: 'Veg Manchurian(Dry/Gravy)',
        price: 250
      },
      {
        name: 'Vegetable Crispy(Dry)',
        price: 275
      }
    ]
  },
  {
    id: '2',
    heading: 'Soup',
    items: [
      {
        name: 'Tomato Soup',
        price: 155
      },
      {
        name: 'Hot Sour Veg Soup',
        price: 165
      },
      {
        name: 'Sweet Corn Soup',
        price: 165
      },
      {
        name: 'Monchow Soup',
        price: 178
      }
    ]
  }
]


function App() {



  return (
    <div className="App">
      <Tabs>

        <TabList>
          {
            data.map((item) => {
              return <Tab>{item.heading}</Tab>
            }) 
          }

        </TabList>

        {
          data.map((item)=>{
            return <TabPanel>


              <EachItem key = {item.id} item = {item}/>

            </TabPanel>
          })
        }

      </Tabs>
    </div>
  );
}

export default App;
