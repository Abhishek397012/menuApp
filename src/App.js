import React from "react";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EachItem from "./Component/EachItem";
import axios from "axios";

// const data = [
//   {
//     heading: 'Main Course',
//     items: [
//       {
//         name: 'Chilli Paneer(Dry/Gravy)',
//         price: 300
//       },
//       {
//         name: 'Chilli Mashroom(Dry/Gravy)',
//         price: 300
//       },
//       {
//         name: 'Veg Manchurian(Dry/Gravy)',
//         price: 250
//       },
//       {
//         name: 'Vegetable Crispy(Dry)',
//         price: 275
//       }
//     ]
//   },
//   {
//     heading: 'Soup',
//     items: [
//       {
//         name: 'Tomato Soup',
//         price: 155
//       },
//       {
//         name: 'Hot Sour Veg Soup',
//         price: 165
//       },
//       {
//         name: 'Sweet Corn Soup',
//         price: 165
//       },
//       {
//         name: 'Monchow Soup',
//         price: 178
//       }
//     ]
//   }
// ]

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
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
    }
  }

  componentDidMount() {
    axios
      .get(`/api/getData`)
      .then((res) => {
        // console.log("res", res);
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  render() {
    


    return (
      <div className="App">
        <h2>Karanataka Resturant</h2>
        <h4>Menu</h4>
       
      
        <Tabs>
          <TabList>
            {
              console.log('data', this.state.data)
            }
            {
            this.state.data.map((item) => {
              return <Tab>{item.heading}</Tab>;
            })
            }
          </TabList>

          {this.state.data.map((item) => {
            return (
              <TabPanel>
                <div>
                  <div className="nameHeading">Name</div>
                  <div className="priceHeading">Price</div>
                  <br />
                </div>
               
                {item.items.map((each) => {
                //  {console.log(each)}
                  return <EachItem name={each.name} price={each.price} />;
                })}
              </TabPanel>
            );
          })}

        </Tabs>
      </div>
    );
  }
}

export default App;
