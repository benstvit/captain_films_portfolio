<template>
  <div id="map" class="w-2/3 h-auto m-auto"/>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  name: 'google-maps-API',
  props: {
    googleMapsKey: {
      type: String,
      default: process.env.googleMapsAPIToken
    },
    mapOptions: {
      type: Object,
      default: {
        center: {
          lat: 34.0522,
          lng: -118.2437
        },
        zoom: 9,
        disableDefaultUI: false
      },
      markers: {
        type: Array,
        default: () => []
      }
    }
  },
  data () {
     return {
      loader: new Loader({
        apiKey: this.googleMapsKey
      }),
      mapOptions: this.mapOptions,
      markers: this.markers
     }
  },
  mounted () {
    this.fetchMap();
  },
  methods: {
    async fetchMap() {
      await this.loader.load().then((google) => {
        const map = new google.maps.Map(
          document.getElementById('map'),
          this.mapOptions
        );

        this.markers.forEach(marker => {
          new google.maps.Marker({
            position: {
              lat: marker.lat,
              lng: marker.lng,
            },
            map,
            title: mapMarker.label
          });
        })
      }).catch (error => {
        console.log(error);
        throw new Error("Could not receive the data from Contentful!");
      })
    }
  }
}
</script>
