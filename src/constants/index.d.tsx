interface Equipment {
    id: string,
    name: string,
    size_cm: {
        length: number,
        width: number,
        height: number
    },
    weight: {
    value: number,
    unit: string
    },
    images_url: string[],
    purposes: string[],
    description: {
      introduction: string,
      functionality: string,
      portability: string
    },
    avg_price: string,
    benefit: string[],
    uses: string[],
    date_of_invention: string,
    inventor_name: string,
    categories: string[],
    major_manufacturing_city: string,
    manufacturing_items: string[]
  }

  interface Category {
    id: string
    name: string
    image_url: string
    attractive_line: string
  }