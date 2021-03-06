import React from 'react'
import enhanceWithClickOutside from 'react-click-outside'
import { SketchPicker } from 'react-color'
import WindowPointer from './WindowPointer'
import { COLORS } from '../lib/constants'
import { parseRGBA } from '../lib/util'

class ColorPicker extends React.Component {
  constructor() {
    super()
    this.state = { isVisible: false }
    this.toggle = this.toggle.bind(this)
    this.handlePickColor = this.handlePickColor.bind(this)
  }

  toggle() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  handleClickOutside() {
    this.setState({ isVisible: false })
  }

  handlePickColor(color) {
    this.props.onChange(parseRGBA(color.rgb))
  }

  render() {
    return (
      <div className="colorpicker-container">
        <div className="colorpicker-display">
          <div className="colorpicker-label">
            <span>BG</span>
          </div>
          <div className="bg-color-container" onClick={this.toggle}>
            <div className="bg-color-alpha" />
            <div className="bg-color" style={{ background: this.props.bg }} />
          </div>
        </div>
        <div className="colorpicker-picker" hidden={!this.state.isVisible}>
          <WindowPointer fromLeft="15px" />
          <SketchPicker color={this.props.bg} onChangeComplete={this.handlePickColor} />
        </div>
        <style jsx>{`
          .colorpicker-container {
            height: 100%;
          }

          .colorpicker-display {
            display: flex;
            height: 100%;
            width: 72px;
            border: 0.5px solid ${COLORS.SECONDARY};
            border-radius: 3px;
          }

          .colorpicker-label {
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            cursor: default;
            height: 100%;
            padding: 0 8px;
            border-right: 0.5px solid ${COLORS.SECONDARY};
          }

          .bg-color-container {
            position: relative;
            width: 34px;
            margin-bottom: 1px;
            background: #fff;
            border-radius: 0px 2px 2px 0px;
            cursor: pointer;
          }

          .bg-color {
            border-radius: 0px 2px 2px 0px;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
          }

          .bg-color-alpha {
            border-radius: 0px 2px 2px 0px;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)
              left center;
          }

          .colorpicker-picker {
            position: absolute;
            margin-left: 36px;
            margin-top: 4px;
          }

          /* react-color overrides */
          .colorpicker-picker :global(.sketch-picker) {
            border: 0.5px solid ${COLORS.SECONDARY} !important;
            border-radius: 3px !important;
            background: #1a1a1a !important;
          }

          .colorpicker-picker > :global(.sketch-picker > div:nth-child(3) > div > div > span) {
            color: ${COLORS.SECONDARY} !important;
          }

          /* TODO remove once base64 url issue fixed in react-color */
          /* prettier-ignore */
          .colorpicker-picker > :global(.sketch-picker > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div),
          .colorpicker-picker > :global(.sketch-picker > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)) {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)
              left center !important;
          }

          .colorpicker-picker > :global(.sketch-picker > div:nth-child(3) > div > div > input) {
            width: 100% !important;
            box-shadow: none;
            outline: none;
            border-radius: 2px;
            background: rgba(255, 255, 255, 0.165);
            color: #fff !important;
          }

          /* prettier-ignore */
          .colorpicker-picker :global(.sketch-picker > div:nth-child(2) > div:nth-child(1) > div:nth-child(2), .sketch-picker > div:nth-child(2) > div:nth-child(2)) {
            background: #fff;
          }
        `}</style>
      </div>
    )
  }
}

export default enhanceWithClickOutside(ColorPicker)
