import React, { useEffect } from 'react'
import { Container, Provider } from 'unstated'

export class RoomContainer extends Container {
  state = {
		currentSong: {
			id: "1e1JKLEDKP7hEQzJfNAgPl",
			uri: "spotify:track:1e1JKLEDKP7hEQzJfNAgPl",
			title: "Magnolia",
			artist: "Playboi Carti",
			addedBy: "Zach",
      images: [
        {
          url: "https://i.scdn.co/image/1c224244e6bc51ae458c8b924c28ba7e6e4f8150"
        },
        {
          url: "https://i.scdn.co/image/1c224244e6bc51ae458c8b924c28ba7e6e4f8150"
        },
        {
          url: "https://i.scdn.co/image/1c224244e6bc51ae458c8b924c28ba7e6e4f8150"
        },
      ]
		},
		queue: [
			{
				id: "3Pzh926pXggbMe2ZpXyMV7",
				uri: "spotify:track:3Pzh926pXggbMe2ZpXyMV7",
				title: "Ain't No Rest for the Wicked",
				artist: "Cage the Elephant",
				addedBy: "Rick",
        images: [
          {
            url: "https://i.scdn.co/image/c664316a130cc43dd7acf1e94e560563813d4a7a"
          },
          {
            url: "https://i.scdn.co/image/c664316a130cc43dd7acf1e94e560563813d4a7a"
          },
          {
            url: "https://i.scdn.co/image/c664316a130cc43dd7acf1e94e560563813d4a7a"
          },
        ]
			},
			{
				id: "1xfFPJdRjgDAaMcDgbXwyh",
				uri: "spotify:track:1xfFPJdRjgDAaMcDgbXwyh",
				title: "STAR",
				artist: "BROCKHAMPTON",
				addedBy: "Zach",
        images: [
          {
            url: "https://i.scdn.co/image/b75a102224a64af6a62da941eb1d2b9984dc717f"
          },
          {
            url: "https://i.scdn.co/image/b75a102224a64af6a62da941eb1d2b9984dc717f"
          },
          {
            url: "https://i.scdn.co/image/b75a102224a64af6a62da941eb1d2b9984dc717f"
          },
        ]
			},
			{
				id: "3kqXhOP3kzCuqT5Xj689Dr",
				uri: "spotify:track:3kqXhOP3kzCuqT5Xj689Dr",
				title: "3",
				artist: "Flume",
				addedBy: "Camillo",
        images: [
          {
            url: "https://i.scdn.co/image/9dcbd30dbe0c621cbaeae427cf80eff9877b4fcd"
          },
          {
            url: "https://i.scdn.co/image/9dcbd30dbe0c621cbaeae427cf80eff9877b4fcd"
          },
          {
            url: "https://i.scdn.co/image/9dcbd30dbe0c621cbaeae427cf80eff9877b4fcd"
          },
        ]
			}
		],
		members: [
			"Zach",
			"Rick",
			"Fernando",
			"Kevin",
			"Camillo"
		],
		public: true,
		password: ""
	}
  initStore = store => this.setState(store)

  addToQueue = song => this.setState(prevState => ({
    queue: prevState.queue.insert(0, song)
  }))

  nextSong = () => {
    if(this.state.queue.length > 0) {
      this.setState(prevState => ({
        currentSong: prevState.queue[prevState.queue.length - 1], 
        queue: prevState.queue.slice(0, prevState.queue.length - 1)
      }))
    }
  }

  addSong = song => {
    this.setState(prevState => ({
      queue: prevState.queue.insert(0, song)
    }))
  }

  addMember = member => {
    this.setState(prevState => ({
      members: [...prevState.members, member]
    }))
  }
}

export const RoomProvider = ({children}) => {
  const room = new RoomContainer()

  return (
    <Provider inject={[room]}>
      {children}
    </Provider>
  )
}
