import Head from "next/head";
import React from "react";
import Image from "next/image";

export default function GroceryApp() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Head>
        <title>Grocery List App | Connor Thompson</title>
        <link rel="icon" href="/connor logo.png" />
        <meta
          name="description"
          content="A grocery list app with dynamic theme selection and Firebase integration"
        />
      </Head>


      <div className="description-section bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 px-4 md:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Grocery List App
          </h1>
          <p className="text-lg mb-4">
            A grocery list app that helps you manage, share, and organize your
            grocery shopping with seven interactive screens. It features dynamic
            theme selection and integrates Firebase for real-time data storage
            and syncing.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Features:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Manage and share grocery lists with others</li>
                <li>
                  Dynamic theme selection for personalized user experience
                </li>
                <li>Real-time data synchronization with Firebase</li>
                <li>Responsive design for all devices</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Android XML for UI design</li>
                <li>Firebase for real-time data storage</li>
                <li>Kotlin and Java for app logic and functionality</li>
                <li>
                  Android Studio for development and testing using a virtual
                  device
                </li>{" "}
                {/* Added Android Studio */}
                <li>Collaborative testing and debugging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow w-full p-4 pt-8">
        <div className="max-w-7xl mx-auto bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden mt-6">
          {/* New Technology Overview Section */}
          <div className="flex mb-8">
            {/* Right Text Section */}
            <div className="w-2/3 pl-8">
              <h2 className="text-xl font-semibold mb-2">
                Technology Overview:
              </h2>
              <p className="text-lg mb-4">
                The Grocery List app leverages several technologies and
                features to provide an efficient and responsive user experience:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
  
                  <strong>Smooth UI Experience:</strong> Using Android XML for
                  UI design, the app ensures a visually appealing and responsive
                  layout across devices.
                <li>
                  <strong>Firebase Integration:</strong> The app stores all data
                  such as item details, quantity, cost, and dates in Firebase.
                  It also supports user login and theme management.
                </li>
                <li>
                  <strong>Theme Management:</strong> Users can select and store
                  a preferred theme using SharedPreferences. The theme persists
                  across sessions and orientation changes.
                </li>
                <li>
                  <strong>Data Storage & RecyclerView:</strong> A custom
                  `GroceryItem` data class is used to manage item details. The
                  app employs a `RecyclerView` adapter to display a list of
                  grocery items dynamically.
                </li>
                <li>
                  <strong>Item Details & Editing:</strong> Users can add, edit,
                  and view item details. Intents are used to pass data between
                  activities for seamless navigation.
                </li>
                <li>
                  <strong>List Creation & Sharing:</strong> Users can create new
                  grocery lists or join existing ones using a unique token. This
                  is supported by Firebase's database querying capabilities
                  (e.g., `.whereEqualTo()`).
                </li>
                <li>
                  <strong>Persistency:</strong> User inputs like theme selection
                  and list information are stored to ensure data is preserved
                  even when the app is closed or the device is rotated.
                </li>
                <li>
                  <strong>Real-Time Feedback:</strong> The app provides users
                  with immediate feedback on their actions using Toast messages
                  for adding items or changing themes, ensuring a responsive and
                  interactive experience.
                </li>
              </ul>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative w-full" style={{ height: "500px" }}>
              <Image
                src="/groceryliststart.png"
                alt="Grocery List App Start Screen"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-md"
              />
            </div>

            <div className="relative w-full" style={{ height: "500px" }}>
              <Image
                src="/grocerylistss.png"
                alt="Grocery List App Screens"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="relative w-full mb-8" style={{ height: "300px" }}>
            <Image
              src="/groceryconsistency.png"
              alt="Grocery List App Horizontal Screen"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="rounded-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
