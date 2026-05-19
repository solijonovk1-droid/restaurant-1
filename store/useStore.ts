import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  restaurantId: string
  image: string
}

interface User {
  id: string
  name: string
  email: string
}

interface Booking {
  id: string
  restaurantId: string
  restaurantName: string
  tableId: string
  tableName: string
  date: string
  status: 'active' | 'completed' | 'cancelled'
}

interface TableBookState {
  user: User | null
  login: (email: string, name?: string) => void
  logout: () => void
  bookings: Booking[]
  addBooking: (booking: Omit<Booking, 'id' | 'status'>) => void
  cancelBooking: (bookingId: string) => void
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  userLocation: { lat: number; lng: number } | null
  setUserLocation: (location: { lat: number; lng: number }) => void
  theme: 'dark' | 'light'
  toggleTheme: () => void
  favorites: string[]
  toggleFavorite: (id: string) => void
}

export const useStore = create<TableBookState>()(
  persist(
    (set) => ({
      user: null,
      login: (email, name = 'Foydalanuvchi') => 
        set({ user: { id: Date.now().toString(), name, email } }),
      logout: () => set({ user: null, bookings: [], cart: [], favorites: [] }),
      
      bookings: [],
      addBooking: (booking) => 
        set((state) => ({
          bookings: [
            ...state.bookings, 
            { ...booking, id: Date.now().toString(), status: 'active' }
          ]
        })),
      cancelBooking: (bookingId) =>
        set((state) => ({
          bookings: state.bookings.map(b => 
            b.id === bookingId ? { ...b, status: 'cancelled' } : b
          )
        })),
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((i) => i.id === item.id)
          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            }
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] }
        }),
      removeFromCart: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== itemId),
        })),
      updateQuantity: (itemId, quantity) =>
        set((state) => ({
          cart: state.cart.map((i) =>
            i.id === itemId ? { ...i, quantity: Math.max(0, quantity) } : i
          ).filter(i => i.quantity > 0),
        })),
      clearCart: () => set({ cart: [] }),
      userLocation: null,
      setUserLocation: (userLocation) => set({ userLocation }),
      theme: 'dark',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      favorites: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((f) => f !== id)
            : [...state.favorites, id],
        })),
    }),
    {
      name: 'tablebook-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

