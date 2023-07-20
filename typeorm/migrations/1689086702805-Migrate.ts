import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Migrate1689086702805 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [{
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                unsigned: true
            }, {
                name: 'name',
                type: 'varchar',
                length: '63'
            }, {
                name: 'email',
                type: 'varchar',
                length: '127',
                isUnique: true
            }, {
                name: 'password',
                type: 'varchar',
                length: '127'
            }, {
                name: 'birthAt',
                type: 'date',
                isNullable: true
            }, {
                name: 'role',
                type: 'enum',
                enum: ['user', 'admin'],
                default: '"user"'
            }, {
                name: 'createdAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP'
            }, {
                name: 'updatedAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP'
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
