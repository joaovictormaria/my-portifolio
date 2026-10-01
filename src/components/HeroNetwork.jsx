import { useEffect, useRef } from 'react'

export default function HeroNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const connectionDirections = [
      { row: 0, column: 1 },
      { row: 1, column: 0 },
      { row: 1, column: 1 },
      { row: 1, column: -1 },
    ]
    let width = 0
    let height = 0
    let pixelRatio = 1
    let nodes = []
    let connections = []
    let animationFrameId = 0

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const columns = Math.max(5, Math.ceil(width / 185))
      const rows = Math.max(3, Math.ceil(height / 165))
      const cellWidth = width / columns
      const cellHeight = height / rows
      nodes = []

      for (let rowIndex = 0; rowIndex <= rows; rowIndex += 1) {
        for (let columnIndex = 0; columnIndex <= columns; columnIndex += 1) {
          const atHorizontalEdge = columnIndex === 0 || columnIndex === columns
          const atVerticalEdge = rowIndex === 0 || rowIndex === rows
          nodes.push({
            x: atHorizontalEdge
              ? columnIndex * cellWidth
              : columnIndex * cellWidth + (Math.random() - 0.5) * cellWidth * 0.28,
            y: atVerticalEdge
              ? rowIndex * cellHeight
              : rowIndex * cellHeight + (Math.random() - 0.5) * cellHeight * 0.28,
          })
        }
      }

      connections = []
      const nodeStride = columns + 1
      for (let rowIndex = 0; rowIndex <= rows; rowIndex += 1) {
        for (let columnIndex = 0; columnIndex <= columns; columnIndex += 1) {
          for (const direction of connectionDirections) {
            const nextRow = rowIndex + direction.row
            const nextColumn = columnIndex + direction.column
            if (nextRow < 0 || nextRow > rows || nextColumn < 0 || nextColumn > columns) continue
            const diagonal = direction.row !== 0 && direction.column !== 0
            if (Math.random() > (diagonal ? 0.22 : 0.78)) continue

            connections.push({
              start: rowIndex * nodeStride + columnIndex,
              end: nextRow * nodeStride + nextColumn,
              phase: Math.random(),
            })
          }
        }
      }
    }

    const drawFrame = (time) => {
      context.clearRect(0, 0, width, height)
      context.lineWidth = 1

      connections.forEach((connection, index) => {
        const start = nodes[connection.start]
        const end = nodes[connection.end]

        context.beginPath()
        context.moveTo(start.x, start.y)
        context.lineTo(end.x, end.y)
        context.strokeStyle = 'rgba(146, 193, 255, 0.17)'
        context.stroke()

        if (reducedMotion || index % 3 !== 0) return

        const progress = ((time / 4200 + connection.phase) % 1 + 1) % 1
        const pulseX = start.x + (end.x - start.x) * progress
        const pulseY = start.y + (end.y - start.y) * progress
        context.beginPath()
        context.arc(pulseX, pulseY, 1.8, 0, Math.PI * 2)
        context.fillStyle = 'rgba(199, 228, 255, 0.94)'
        context.shadowColor = 'rgba(84, 133, 229, 0.9)'
        context.shadowBlur = 8
        context.fill()
        context.shadowBlur = 0
      })

      nodes.forEach((node) => {
        context.beginPath()
        context.arc(node.x, node.y, 1.4, 0, Math.PI * 2)
        context.fillStyle = 'rgba(146, 193, 255, 0.48)'
        context.fill()
      })

      if (!reducedMotion) animationFrameId = window.requestAnimationFrame(drawFrame)
    }

    const handleResize = () => {
      resizeCanvas()
      if (reducedMotion) drawFrame(0)
    }

    resizeCanvas()
    animationFrameId = window.requestAnimationFrame(drawFrame)
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="herod__network" aria-hidden="true" />
}