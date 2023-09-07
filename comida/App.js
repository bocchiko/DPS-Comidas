import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ListaComidas from './src/components/listacomida';

const comidasData = [
  {
    nombre: 'Pupusa',
    calorias: 256,
    imagen:
      'https://www.simplyrecipes.com/thmb/FxM70WUalkiC12O2jbX3gh2jGH8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Pupusas-LEAD-1-d916697aff0b4a08857fd8e4393756cd.jpg',
  },
  {
    nombre: 'Tamales',
    calorias: 153,
    imagen:
      'https://cocinasalvadorena.com/wp-content/uploads/2021/01/tamales-de-gallina-o-pollo.jpg',
  },
  {
    nombre: 'Nuegados',
    calorias: 400,
    imagen:
      'https://www.196flavors.com/wp-content/uploads/2018/10/nuegados-de-yuca-5.jpg',
  },
  {
    nombre: 'Yuca Frita',
    calorias: 108,
    imagen:
      'https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1003442.jpg',
  },
  {
    nombre: 'Atol Shuco',
    calorias: 209,
    imagen:
      'https://www.riograndefoods.com/wp-content/uploads/2021/09/Atol-Shuco-Powder-Beverage-2-e1635779309928.png',
  },
  {
    nombre: 'Poleada',
    calorias: 381,
    imagen:
      'https://www.aceiteideal.com/wp-content/uploads/2020/07/PORTADA-lechepoleada.png',
  },
  {
    nombre: 'Empanadas de Leche',
    calorias: 234,
    imagen:
      'https://www.recetassalvador.com/base/stock/Recipe/42-image/42-image_web.jpg',
  },
  {
    nombre: 'Quesadilla',
    calorias: 380,
    imagen:
      'https://cocinasalvadorena.com/wp-content/uploads/2020/07/quesadilla-salvadorena.jpg',
  },
  {
    nombre: 'Canoas de Platano',
    calorias: 400,
    imagen:
      'https://www.recetassalvador.com/base/stock/Recipe/39-image/39-image_web.jpg',
  },
  {
    nombre: 'Jocotes en Miel',
    calorias: 240,
    imagen:
      'https://www.elsalvadormipais.com/wp-content/uploads/2018/08/jocotes-en-miel.jpg',
  },
  {
    nombre: 'Hojuelas',
    calorias: 240,
    imagen:
      'https://www.eladerezo.com/wp-content/uploads/2008/03/hojuelas-4.jpg',
  },
  {
    nombre: 'Elote Loco',
    calorias: 330,
    imagen:
      'https://www.aceiteideal.com/wp-content/uploads/2020/08/PORTADA-eloteslocos-2000x1200.png',
  },
];

function HomeScreen() {
  return (
    <ScrollView>
      <ListaComidas comidas={comidasData} />
    </ScrollView>
  );
}

function FooterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Presentador por Luis Bonilla</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, margin: 10 }}>
          Comidas Típicas Salvadoreñas
        </Text>
      </View>
      <View style={{ flex: 6 }}>
        <HomeScreen />
      </View>
      <View style={{ flex: 1 }}>
        <FooterScreen />
      </View>
    </View>
  );
}