export default {
  title: "Address",
  name: "address",
  type: "object",
  fields: [
    { name: "street", type: "string", title: "Street" },
    { name: "street2", type: "string", title: "Apartment, suite, etc." },
    { name: "city", type: "string", title: "City" },
    {
      name: "state",
      type: "string",
      title: "State",
      options: {
        list: [
          { name: "Alabama", title: "AL" },
          { name: "Alaska", title: "AK" },
          { name: "American Samoa", title: "AS" },
          { name: "Arizona", title: "AZ" },
          { name: "Arkansas", title: "AR" },
          { name: "California", title: "CA" },
          { name: "Colorado", title: "CO" },
          { name: "Connecticut", title: "CT" },
          { name: "Delaware", title: "DE" },
          { name: "District Of Columbia", title: "DC" },
          { name: "Federated States Of Micronesia", title: "FM" },
          { name: "Florida", title: "FL" },
          { name: "Georgia", title: "GA" },
          { name: "Guam", title: "GU" },
          { name: "Hawaii", title: "HI" },
          { name: "Idaho", title: "ID" },
          { name: "Illinois", title: "IL" },
          { name: "Indiana", title: "IN" },
          { name: "Iowa", title: "IA" },
          { name: "Kansas", title: "KS" },
          { name: "Kentucky", title: "KY" },
          { name: "Louisiana", title: "LA" },
          { name: "Maine", title: "ME" },
          { name: "Marshall Islands", title: "MH" },
          { name: "Maryland", title: "MD" },
          { name: "Massachusetts", title: "MA" },
          { name: "Michigan", title: "MI" },
          { name: "Minnesota", title: "MN" },
          { name: "Mississippi", title: "MS" },
          { name: "Missouri", title: "MO" },
          { name: "Montana", title: "MT" },
          { name: "Nebraska", title: "NE" },
          { name: "Nevada", title: "NV" },
          { name: "New Hampshire", title: "NH" },
          { name: "New Jersey", title: "NJ" },
          { name: "New Mexico", title: "NM" },
          { name: "New York", title: "NY" },
          { name: "North Carolina", title: "NC" },
          { name: "North Dakota", title: "ND" },
          { name: "Northern Mariana Islands", title: "MP" },
          { name: "Ohio", title: "OH" },
          { name: "Oklahoma", title: "OK" },
          { name: "Oregon", title: "OR" },
          { name: "Palau", title: "PW" },
          { name: "Pennsylvania", title: "PA" },
          { name: "Puerto Rico", title: "PR" },
          { name: "Rhode Island", title: "RI" },
          { name: "South Carolina", title: "SC" },
          { name: "South Dakota", title: "SD" },
          { name: "Tennessee", title: "TN" },
          { name: "Texas", title: "TX" },
          { name: "Utah", title: "UT" },
          { name: "Vermont", title: "VT" },
          { name: "Virgin Islands", title: "VI" },
          { name: "Virginia", title: "VA" },
          { name: "Washington", title: "WA" },
          { name: "West Virginia", title: "WV" },
          { name: "Wisconsin", title: "WI" },
          { name: "Wyoming", title: "WY" }
        ]
      }
    },
    { name: "zip", type: "string", titile: "Zip Code" }
  ]
};
