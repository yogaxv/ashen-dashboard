import create from 'zustand'

interface SidebarState {
  open: boolean
  setOpen: () => void
}

const useSidebarStore = create<SidebarState>()((set) => ({
  open: true,
  setOpen: () =>{
    console.log()
    set((state) => ({ open: !state.open })) 
  },
}))

export default useSidebarStore;