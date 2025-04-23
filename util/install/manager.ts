import { exec } from 'child_process';
import check_validity from './checks/check_validity.ts';
import colors from '../colors.ts';
import inquirer from 'inquirer';

function manager(packages: object) {
    check_validity(packages);
}