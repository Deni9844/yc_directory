## Introduction

A platform built with Next.js 15 that allows entrepreneurs to submit their startup ideas for virtual pitch competitions, explore other submissions, and gain visibility—all through a clean, minimalistic design that ensures a seamless user experience.

## ⚙️ Tech Stack

- React 19
- Next.js 15
- Sanity
- TailwindCSS
- ShadCN
- TypeScript

## 🛠️ Features

👉 **Real-Time Content API**:  Fetches and displays the latest startup ideas dynamically on the homepage using Sanity’s Content API.

👉 **GitHub Login Integration**: Enables users to sign in quickly and securely using their GitHub accounts.

👉 **Submit Startup Pitches**: Allows users to share their startup ideas with details like title, description, category, and media (images).

👉 **Explore Pitches**: Browse all submitted ideas with easy-to-use category filters.

👉 **Pitch Detail View**: Clicking a pitch opens a detailed page with its full description and embedded multimedia.

👉 **User Profiles**: Displays a personalized list of all pitches submitted by each user.

👉 **Editor’s Picks**: Admins can highlight standout pitches via the “Editor Picks” feature, managed directly through Sanity Studio.

👉 **Views Counter**: Tracks the number of views for each pitch instead of an upvote system.

👉 **Search**: Search functionality to load and view pitches efficiently.

👉 **Minimalistic Design**: Clean, distraction-free UI focused on simplicity and usability.

...and much more powered by the latest **React 19**, **Next.js 15**, and **Sanity**, with thoughtful code architecture and reusable components built in.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Deni9844/yc_directory.git
cd yc_directory
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_WRITE_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up &
creating a new project on the [Sanity website](https://www.sanity.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
