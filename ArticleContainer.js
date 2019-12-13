import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container} from 'unstated';
import {PersistContainer} from 'unstated-persist';
import {AsyncStorage} from 'react-native';

export default class ArticleContainer extends PersistContainer {

    constructor(props) {
        super(props)
        this.state = {
    	    readingList: [],
        }


        this.fetchList()
    }

	fetchList = async () => {
		const readingList = await getReadingList()
		this.setState({readingList: readingList})
    }

  getReadingList = () => this.state.readingList

  deleteArt = article => {
      const newArts = this.state.readingList.filter(c => c !== article)
      this.setState({readingList: newArts})
  }


addArt = newArt => {
  const artWithKey = {...newArt, key: newRandomKey()}
  this.setState(prev => ({readingList: [...prev.readingList, artWithKey]}))
  }

  // if no data, fetch some from the internet
  persist = {
      key: 'readingList',
      version: 4,
      storage: AsyncStorage,
      init: this.fetchList
  }

}
