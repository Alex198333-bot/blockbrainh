// components/DemoPlatform.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function DemoPlatform() {
  const [prices, setPrices] = useState([]);
