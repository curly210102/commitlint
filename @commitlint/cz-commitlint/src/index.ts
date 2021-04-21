import load from '@commitlint/load';
import {Inquirer} from 'inquirer';
import process from './Process';

type Commit = (message: string) => void;
/**
 * Entry point for commitizen
 * @param  inquirer instance passed by commitizen, unused
 * @param commit callback to execute with complete commit message
 * @return {void}
 */
export function prompter(inquirer: Inquirer, commit: Commit): void {
	load().then(({rules, prompt}) => {
		process(
			rules,
			// if commitlint shareable config not support prompt, use commitizen config
			prompt || require('commitizen').configLoader.load()?.prompt || {},
			inquirer
		).then(commit);
	});
}
