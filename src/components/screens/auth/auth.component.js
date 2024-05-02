import renderService from '@/core/services/render.service'

import { AuthService } from '@/api/auth.service'
import { Button } from '@/components/ui/button/button.component'
import { Field } from '@/components/ui/field/field.component'
import { $A } from '@/core/aquery/aquery.lib'
import { BaseScreen } from '@/core/component/base-screen-component'
import styles from './auth.module.scss'
import template from './auth.template.html'

export class Auth extends BaseScreen {
	#isTypeLogin = true

	constructor() {
		super({ title: 'Auth' })
		this.authService = new AuthService()
	}

	#handleSubmit = event => {
		console.log(event.taget)
	}

	#changeFormType = event => {
		event.preventDefault()

		$A(this.element)
			.find('h1')
			.text(this.#isTypeLogin ? 'Register' : 'Sing In')
		$A(event.taget).text(this.#isTypeLogin ? 'Sign In' : 'Register')
		this.#isTypeLogin = !this.#isTypeLogin
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new Button({
					children: 'Submit',
				}),
			],
			styles
		)

		$A(this.element)
			.find('#auth-inputs')
			.append(
				new Field({
					placeholder: 'Enter email',
					name: 'email',
					type: 'email',
				}).render()
			)
			.append(
				new Field({
					placeholder: 'Enter password',
					name: 'password',
					type: 'password',
				}).render()
			)

		$A(this.element).find('#change-auth-type').click(this.#changeFormType)
		// $A(this.element).find('form').submit(this.#handleSubmit)

		return this.element
	}
}
