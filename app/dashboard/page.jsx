"use client";

import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function Page() {

  const { data: session, status } = useSession()
  const router = useRouter()

  const [jsonData, setJsonData] = useState([]);
  const [graph, setGraph] = useState({ datasets: [] });

  const loadData = async () => {
    try {
      const response = await fetch("/api/task");
      const jsonData = await response.json();
      setJsonData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  async function onDeleteRate(paramId) {
    const response = await fetch("/api/task/" + (paramId), {
      method: "DELETE"
    });
    location.reload()
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
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
      <div className="bg-white h-[100vh]">

        <div className="flex justify-between items-center p-4">
          <h1 className="text-black text-3xl font-semibold pl-12">Admin Dashboard</h1>
          <div className="flex space-x-4 items-center">
            <h1 className="text-black text-lg font-bold">{session.user.email}</h1>
            <button onClick={() => signOut({ callbackUrl: '/dashboard' })} className="bg-red-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg hover:scale-[1.1] duration-300">Logout</button>
          </div>

        </div>
        <div className="grid place-items-center">
          <div className="w-[35rem]">
            <Bar options={options} data={graph} />
          </div>
        </div>

        <div className="px-16 py-8">
        <table className="text-black w-full">
      <thead className="bg-gray-100 border-2 border-b-4 border-gray-300">
        <tr>
          <th className="p-2 border-2 border-gray-300">Firstname</th>
          <th className="p-2 border-2 border-gray-300">Lastname</th>
          <th className="p-2 border-2 border-gray-300">Class</th>
          <th className="p-2 border-2 border-gray-300">Comment</th>
          <th className="p-2 border-2 border-gray-300">Action</th>
        </tr>
      </thead>
      {
        jsonData ? jsonData.map((item, index) =>
          <tbody key={index} className="text-left border border-gray-300 text-sm">
            <tr>
              <td className="p-2 border border-gray-300">{item.firstname}</td>
              <td className="p-2 border border-gray-300">{item.lastname}</td>
              <td className="p-2 border border-gray-300">{item.grade}/{item.room}</td>
              <td className="p-2 border border-gray-300">{item.comments}</td>
              <td className="p-2 border border-gray-300 text-center">
                <button onClick={() => {onDeleteRate(item.id)}} className="bg-red-500 rounded-md text-white p-[5px]">Delete</button>
              </td>
            </tr>
          </tbody>
        ) : null
      }
    </table>
        </div>
      </div>
    )
  );
}

export default Page;
