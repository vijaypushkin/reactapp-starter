const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center h-12 border-t border-neutral-300/20 text-neutral-300">
      <div>Copyright &copy; Vijay Pushkin {new Date().getFullYear()}</div>
    </footer>
  )
}

export { Footer }
