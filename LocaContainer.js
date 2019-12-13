import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container} from 'unstated';
import {PersistContainer} from 'unstated-persist';
import {AsyncStorage} from 'react-native';

export default class LocationContainer extends PersistContainer {

  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import {Container} from 'unstated';
  import {PersistContainer} from 'unstated-persist';
  import {AsyncStorage} from 'react-native';

  export default class LocationContainer extends PersistContainer {

      constructor(props) {
          super(props)
          this.state = {
      	    coorList: [],
          }


          this.fetchList()
      }

  	fetchList = async () => {
  		const coorList = await getCoorList()
  		this.setState({coorList: coorList})
      }

    getCoorList = () => this.state.coorList

    deleteAds = adress => {
        const newAds = this.state.coorList.filter(c => c !== adress)
        this.setState({coorList: newAds})
    }


  addAds = newAds => {
    const adsWithKey = {...newAds, key: newRandomKey()}
    this.setState(prev => ({coorList: [...prev.coorList, adsWithKey]}))
    }

    // if no data, fetch some from the internet
    persist = {
        key: 'coorList',
        version: 4,
        storage: AsyncStorage,
        init: this.fetchList
    }

  }
