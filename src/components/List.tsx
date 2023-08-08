interface ListProps<T> {
  readonly items: T[]
  readonly onClick: (value: T) => void
}

export const List = <T extends { id: number; name: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div role="presentation" key={item.id} onClick={() => onClick(item)}>
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
