"use client";

import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Page() {

  const { data: session, status } = useSession()
  const router = useRouter()

  const [jsonData, setJsonData] = useState([]);
  const [graph, setGraph] = useState({ datasets: [] });

  const loadData = async () => {
    try {
      const response = await fetch("/api/task/");
      const jsonData = await response.json();
      setJsonData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/dashboard')
    }
  }, [router, status])

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (jsonData.length > 0) {
      const counts = [0, 0, 0, 0, 0];

      jsonData.forEach((item) => {
        switch (item.rating) {
          case 5:
            counts[0]++;
            break;
          case 4:
            counts[1]++;
            break;
          case 3:
            counts[2]++;
            break;
          case 2:
            counts[3]++;
            break;
          case 1:
            counts[4]++;
            break;
          default:
            break;
        }
      });

      setGraph({
        labels: ['พอใจสุดๆ', 'พอใจมาก', 'เฉยๆ', 'ไม่ค่อยชอบ', 'ควรปรับปรุง'],
        datasets: [{
          label: 'จำนวนระดับความพึงพอใจ',
          data: counts,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1
        }],
      });
    }
  }, [jsonData]);

  return (
    status === 'authenticated' && session.user && (
      <div className="bg-white h-full">

        <div className="flex justify-between items-center p-4">
          <h1 className="text-black text-4xl font-semibold pl-12">Dashboard</h1>
          <div className="flex space-x-4 items-center">
            <h1 className="text-black text-lg font-bold">{session.user.email}</h1>
            <button onClick={() => signOut( { callbackUrl: '/dashboard' } )} className="bg-red-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg hover:scale-[1.1] duration-300">Logout</button>
          </div>
          
        </div>
        <div className="flex justify-around items-start py-16 px-[5rem]">
          <div className="w-[25rem] h-[25rem]">
            <Doughnut data={graph} />
          </div>

          <div className="border-gray-800 border-2 rounded-md w-[32rem] h-[28rem] overflow-y-auto">
            <div>
              { jsonData ? jsonData.map(item => 
                  <div className="font-bold py-2 shadow-lg border-t-2 px-8 border-gray-800">
                      <p className="text-black text-lg">{item.firstname} {item.lastname} {item.grade}/{item.room}</p>
                      <p className="text-black text-sm">{item.comments}</p>
                      <p className="text-black text-md">ความพอใจ: {item.rating}</p>
                  </div>

                ) : null
              }
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Page;
