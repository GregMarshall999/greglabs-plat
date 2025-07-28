import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppFooter from '../../src/components/AppFooter.vue'

describe('AppFooter', () => {
  it('renders the footer component', () => {
    const wrapper = mount(AppFooter)
    expect(wrapper.find('.app-footer').exists()).toBe(true)
  })

  it('displays the correct copyright text with current year', () => {
    const wrapper = mount(AppFooter)
    const currentYear = new Date().getFullYear()
    expect(wrapper.find('.footer-text').text()).toContain(`© ${currentYear} Greglabs. All rights reserved.`)
  })

  it('renders all three social media links', () => {
    const wrapper = mount(AppFooter)
    const links = wrapper.findAll('.footer-links a')
    expect(links).toHaveLength(3)
  })

  it('has correct LinkedIn link and attributes', () => {
    const wrapper = mount(AppFooter)
    const linkedinLink = wrapper.find('a[href="https://www.linkedin.com/in/gregorymarshall999"]')
    
    expect(linkedinLink.exists()).toBe(true)
    expect(linkedinLink.attributes('target')).toBe('_blank')
    expect(linkedinLink.attributes('rel')).toBe('noopener noreferrer')
    expect(linkedinLink.attributes('aria-label')).toBe('LinkedIn')
  })

  it('has correct GitHub link and attributes', () => {
    const wrapper = mount(AppFooter)
    const githubLink = wrapper.find('a[href="https://github.com/GregMarshall999"]')
    
    expect(githubLink.exists()).toBe(true)
    expect(githubLink.attributes('target')).toBe('_blank')
    expect(githubLink.attributes('rel')).toBe('noopener noreferrer')
    expect(githubLink.attributes('aria-label')).toBe('GitHub')
  })

  it('has correct email link and attributes', () => {
    const wrapper = mount(AppFooter)
    const emailLink = wrapper.find('a[href="mailto:gregory.marshall999@gmail.com"]')
    
    expect(emailLink.exists()).toBe(true)
    expect(emailLink.attributes('target')).toBe('_blank')
    expect(emailLink.attributes('rel')).toBe('noopener noreferrer')
    expect(emailLink.attributes('aria-label')).toBe('Email')
  })

  it('renders LinkedIn SVG icon', () => {
    const wrapper = mount(AppFooter)
    const linkedinLink = wrapper.find('a[href="https://www.linkedin.com/in/gregorymarshall999"]')
    const svg = linkedinLink.find('svg')
    
    expect(svg.exists()).toBe(true)
    expect(svg.attributes('width')).toBe('24')
    expect(svg.attributes('height')).toBe('24')
    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
  })

  it('renders GitHub SVG icon', () => {
    const wrapper = mount(AppFooter)
    const githubLink = wrapper.find('a[href="https://github.com/GregMarshall999"]')
    const svg = githubLink.find('svg')
    
    expect(svg.exists()).toBe(true)
    expect(svg.attributes('width')).toBe('24')
    expect(svg.attributes('height')).toBe('24')
    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
  })

  it('renders Email SVG icon', () => {
    const wrapper = mount(AppFooter)
    const emailLink = wrapper.find('a[href="mailto:gregory.marshall999@gmail.com"]')
    const svg = emailLink.find('svg')
    
    expect(svg.exists()).toBe(true)
    expect(svg.attributes('width')).toBe('24')
    expect(svg.attributes('height')).toBe('24')
    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
  })

  it('has proper CSS classes for styling', () => {
    const wrapper = mount(AppFooter)
    
    expect(wrapper.find('.app-footer').exists()).toBe(true)
    expect(wrapper.find('.footer-links').exists()).toBe(true)
    expect(wrapper.find('.footer-text').exists()).toBe(true)
  })

  it('has proper link structure with SVG icons', () => {
    const wrapper = mount(AppFooter)
    const links = wrapper.findAll('.footer-links a')
    
    links.forEach(link => {
      expect(link.find('svg').exists()).toBe(true)
    })
  })

  it('updates copyright year dynamically', () => {
    const wrapper = mount(AppFooter)
    const currentYear = new Date().getFullYear()
    const footerText = wrapper.find('.footer-text')
    
    // Test that the year is dynamic and matches current year
    expect(footerText.text()).toContain(currentYear.toString())
  })

  it('has proper accessibility attributes on all links', () => {
    const wrapper = mount(AppFooter)
    const links = wrapper.findAll('.footer-links a')
    
    links.forEach(link => {
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener noreferrer')
      expect(link.attributes('aria-label')).toBeTruthy()
    })
  })

  it('renders footer with correct structure', () => {
    const wrapper = mount(AppFooter)
    
    // Check main footer container
    const footer = wrapper.find('.app-footer')
    expect(footer.exists()).toBe(true)
    
    // Check footer links container
    const footerLinks = footer.find('.footer-links')
    expect(footerLinks.exists()).toBe(true)
    
    // Check footer text container
    const footerText = footer.find('.footer-text')
    expect(footerText.exists()).toBe(true)
  })
}) 