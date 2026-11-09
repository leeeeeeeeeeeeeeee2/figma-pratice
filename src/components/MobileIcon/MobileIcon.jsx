import './MobileIcon.css'

const files = import.meta.glob('../../assets/icons/{mobile,common}/*.{svg,png}', {
  eager: true,
  import: 'default',
})

const findIcon = (name) => {
  const isMatch = (folder) => (path) => new RegExp(`/${folder}/${name}\\.(svg|png)$`).test(path)
  const path = Object.keys(files).find(isMatch('mobile')) ?? Object.keys(files).find(isMatch('common'))
  return path ? files[path] : undefined
}

/* 뜻이 있는 아이콘은 alt에 설명을 넣고, 글자와 함께 쓰는 장식용이면 비워 둔다. */
function MobileIcon({ name, alt = '' }) {
  const src = findIcon(name)
  if (!src) return null

  return <img className={`mobile-icon mobile-icon--${name}`} src={src} alt={alt} />
}

export default MobileIcon
