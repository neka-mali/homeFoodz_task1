import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';


export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>Dashboard</Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <View style={[styles.user, styles.header]}>
              <Text style={styles.headerText}>Welcome Back</Text>
              <Text style={styles.headerText}>Mohamed</Text>
            </View>
          </View>

<View style={[styles.square, { flex: 0.3, height: 200 }]}>
            <View style={[styles.smallSquare, { backgroundColor: '#5F236B' }]}>
              <View style={styles.circle}>
                <Image
                  source={require('../assets/chef.png')}
                  style={styles.image}
                />
              </View>
              <View style={styles.textStyle}>
                <Text style={styles.squareText}> 1 </Text>
                <Text style={styles.squareTitle}>Total Received Orders</Text>
              </View>
            </View>

            <View style={[styles.smallSquare, { backgroundColor: '#BE375F' }]}>
              <View style={styles.circle}>
                <Image
                  source={require('../assets/cooking.png')}
                  style={styles.image}
                />
              </View>
              <View style={styles.textStyle}>
                <Text style={styles.squareText}> 2 </Text>
                <Text style={styles.squareTitle}>Total Completed Orders</Text>
              </View>
            </View>
          </View>

          <View style={[styles.square, { flex: 0.3, height: 400 }]}>
            <View
              style={[
                styles.smallSquare,
                { backgroundColor: '#EE8555', marginTop: '23%' },
              ]}>
              <View style={styles.circle}>
                <Image
                  source={require("../assets/hotel.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.textStyle}>
                <Text style={[styles.squareText, { color: '#742092' }]}>
                3
                </Text>
                <Text style={[styles.squareTitle, { color: '#742092' }]}>
                  Total Orders In Queue
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.smallSquare,
                { backgroundColor: '#F5EC6D', marginTop: '23%' },
              ]}>
              <View style={styles.circle}>
                <Image
                  source={require("../assets/delivery.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.textStyle}>
                <Text style={[styles.squareText, { color: '#742092' }]}>4</Text>
                <Text style={[styles.squareTitle, { color: '#742092' }]}>
                  Total Orders Under Delivery
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#752092',
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 25,
    color: '#ffe3b3',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  user: {
    alignItems: 'center',
  },
  square: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  smallSquare: {
    width: '48%',
    height: '150%',
    borderRadius: 15,
  },
  squareText: {
    fontSize: 25,
    color: '#FFE3B3',
    textAlign: 'center',
    marginTop: '5%',
    fontWeight: 'bold',
  },
  squareTitle: {
    color: '#FFE3B3',
    textAlign: 'center',
    flexwrap: 'wrap',
    margin: '10%',
    fontWeight: 'bold',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 200,
    backgroundColor: 'white',
    margin: 5,
  },
  image: {
    alignSelf: 'center',
    margin: 10,
  },
  textStyle: {
    marginTop: '20%',
    fontWeight: 'bold',
  },
});
