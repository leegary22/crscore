import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '01b345c21cf546498b90fc9949521126'
                    }
                    'credit-score-rating': {
                        table: 'sys_script'
                        id: 'a5ca954875404f8aba7431b76ff532bd'
                    }
                    'loan-application-processor': {
                        table: 'sys_script'
                        id: '2441ec897fe04bc2b610574565a0d9ed'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a1c02548e40240d39d8e31f3bc73d2fa'
                    }
                    'payment-schedule-generator': {
                        table: 'sys_script'
                        id: 'a52a79d78b3b4a84b98c1695d64ef875'
                    }
                    'payment-status-updater': {
                        table: 'sys_script'
                        id: '31f0e071ac7f4f0baa8890c8b554296d'
                    }
                    src_server_modules_CreditScoreRules_js: {
                        table: 'sys_module'
                        id: 'f0e7de48a1244594911db60577bd78e6'
                    }
                    src_server_modules_InitialData_js: {
                        table: 'sys_module'
                        id: '0960f1024cfe4a2882e7ccf9f7d87b21'
                    }
                    src_server_modules_LoanApplicationRules_js: {
                        table: 'sys_module'
                        id: 'd69d34eb28494885bbd27a9c2389419c'
                    }
                    src_server_modules_LoanCalculations_js: {
                        table: 'sys_module'
                        id: '954e498ec7e04e628a758b3f026abfe0'
                    }
                    src_server_modules_PaymentScheduleRules_js: {
                        table: 'sys_module'
                        id: '23c9128666104023ba0eb3eb676ce910'
                    }
                    src_server_modules_PaymentStatusRules_js: {
                        table: 'sys_module'
                        id: '7a8554de82534760abaa1bbbc9ddb1c1'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0008d30b197448b3978955403fba1a47'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'base_interest_rate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '00388a4b6e2a4afdb0d79ff73ed89aa2'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'zip_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '006ff667a05d490c81d57250dbecc16a'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '007567e239974a12ab48658c022e770d'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_rating'
                            value: 'excellent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '035a2fb1389943c69d88ed215eec3361'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'address_line1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0370743e73dc40e6905af33cf98286e3'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'requires_collateral'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03b203d3567d45cab06afa161f211ec8'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '043aefeb19744ed3898e9bc6d978a117'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employment_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04426688d22a43af9acc2897d2c70eec'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04b56502983149209b10bbc4c7b8fe62'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '04cf972525d448f78268f50f1aeb5879'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'customer_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0535d13599cf44ee98eb3e318aeb3fd6'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employer_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0574f722475c4fe58801abde1c052db5'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'address_line2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05881a405fc949f08c00d08e8b251948'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'total_debt'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0781ad66d3c647b699c6222634b89422'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07b801b0a1b3471696dfd4e3415b2aec'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'available_credit'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '082f676065e04b23bd6790256ca73fb0'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_rating'
                            value: 'good'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '089ff681f44049e087081696d1124e02'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '093d0315428c4ad88979d01608f999e3'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_status'
                            value: 'overdue'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09684725e7804625aa7256d22670b204'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'social_security'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b2f4c533b3f4e3a90511599c9633fa4'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'requires_collateral'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0be56e77ce064a559a05ad3d884d64d8'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0c6ee63aea734e1d8cffda63e9858e46'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_bureau'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c9f10edb074404eb67ff5ba078e3613'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'rejection_reason'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0ff041eb510e4e99a5f2bb079175c8c3'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '100c17ff91e647438a16736bb557fab4'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_bureau'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '10262e41cbb646f8913bfe0aefcfe7b1'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_category'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '10bc032c3a354a0d89255d2262c9bd48'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1108f847b36f447a8a29b881f328a6e3'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1218040f685c44cc8ffb83e37566a7d3'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_category'
                            value: 'business'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '146bb4eb9f294cc68a113aa774e5dce9'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'min_credit_score'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '151a7a2f98764c4e9881f2f0c6440e21'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'address_line1'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16dcb09453264be4a24c1710e9c26346'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'recent_inquiries'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '182316eb29d94b689bdec758fa6e922e'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_rating'
                            value: 'very_good'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '197a4c24203c4658a9bea670dbcc02a7'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a545ce9da204d209c1075c728bdfb60'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1aead0b103ab401f82b624ce92201ba0'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'collateral_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1ddcdd3723254331a74c1b0b7ecc0fc8'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ddcfa7e6c3c4e6d87d6c2361a70844e'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e2a933d97594cb5a274cade830ebca3'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                            value: 'home_improvement'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f030965d09549819fc01ea777a5d100'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'verification_method'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2066fb31f75f4887a8c9503008282555'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'customer_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21c1f31fcb7f4144a65a960fe0df6940'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2357b338d09544d5a0eee1caa0e561b3'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2363046ad52c40e4b83b8cad10a5eaba'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '253b6e5d4d0343f9b30f73c3bbfb1adf'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'risk_category'
                            value: 'low_risk'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26639c50d09d4efaa3393cb1f84e549c'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'comments'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '281df1f4a7ec488da7e18a2e8abcd30e'
                        key: {
                            endpoint: 'x_snc_cash_loan_wi_loan_app.do'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '28298db8fb43460c9bf52171ca6709ec'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'verification_method'
                            value: 'soft_pull'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '28497ccc3a2c46929785c506d75e894f'
                        key: {
                            name: 'x_snc_cash_loan_wi/main.js.map'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '286b663f9e3348e3aaad46eea2b5c8a7'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'customer_status'
                            value: 'suspended'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '297967802785412896904f83c85d0368'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_bureau'
                            value: 'experian'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a08740fbcc946c683ffeac8412cab56'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'interest_rate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a9ced594e2a42c1ac43dd69d4786d9c'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'social_security'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2bd76ccdd86d4ea6b9e65ebeb691b652'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c7b80d2bcc1471db2f32d6d0ccdeed7'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'last_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2efeb9cae8bb450188f1c2fd6d34277d'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'risk_category'
                            value: 'medium_risk'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f4d986dd7a247aca433e32f7494b774'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'actual_payment_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '302412ced44544a3ad8ca5f500789b07'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'decision_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30e07ed5ad2a458192d5b2bb2024c19d'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31029d36097f4859b65e51156def2a15'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31bae020461b4249aa33928e8950c86d'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'number_of_accounts'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31cbbfcfd8114cc88536d873948d1624'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'principal_amount'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '34f9f474edfe411a879d038c322a1a4b'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3520d2a1853b47888bc9dd5e71a739e4'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_score'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '380f6d66d128435d9f39498110411117'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_category'
                            value: 'emergency'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3869341b9c8c4dde84ca55cbf898664c'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3aa66f51dda449eebb5ec58e871257e5'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'payment_history_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3bc6d1a31d204dc5aed5b22fad8dc0b7'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'verification_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c3085e316d54eefb50e9da4825338ef'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d4a3b8c279642dbaf299d777d8abae7'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ec5848516914e46b394043cdcc6327e'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '404787bda7f948769614cb32bf9ca87a'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employment_status'
                            value: 'student'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '40a163f5f4044ce59e9f0d2ab4264b75'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42435af7f162437e9e3f36a204c15117'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '43028edec01a422bb371c92e4a2d4155'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_rating'
                            value: 'fair'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4350b435aa8e43fb93578b83cd11a5b5'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'interest_rate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4382f014287b4096a9286c6f351cb920'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '438b59ef9f4e4b27bc5ce4225334d1d2'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'transaction_reference'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '44a49114c7a24878ba4a11a45a6fe2b9'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employment_status'
                            value: 'unemployed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44ef6b070052417da470ee416d325788'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_utilization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45ceba3759944cf0b93cd7cba14b4084'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'comments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45d8a9b7dda04df1a3222d0548be8993'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'collateral_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45dff4326ab040238bf3c4bf8188a3c0'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'verification_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '49cae941cc744bdb89074a0d52018bd8'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a99eb930560403d8eaf6cbbaf5e5bdb'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'income_verified'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4db00473a811435cb16548233b8ae719'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'score_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4def506451364dc4bef9e751991e1490'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_category'
                            value: 'auto'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e9353e962f74533ad8120d729bd5767'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'first_payment_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f011f463ed84256a6b4f348a1f66f10'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'requested_amount'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '51d37109e7b24d49b836f8d23aba2dfc'
                        key: {
                            application_file: '28497ccc3a2c46929785c506d75e894f'
                            source_artifact: 'c4f06ce44eb1440aaaa0bef40d99e96d'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51e07d76aaf44d49af6748b8f2e820dd'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'verification_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5562eee4ba0048acabad43fae773c9e5'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_rating'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55aab8bdd6b2464d857c23f31c039fde'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'actual_payment_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '571a5e14a12c423bb9fe153d07cc160e'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'risk_category'
                            value: 'high_risk'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '572f46b09b4b472a83072b4116f70500'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'total_amount_payable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '582ca477835c4e1398af83eb6f699351'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '58af6abb94264c14add62b1a0a00f3b2'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_rating'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58d3bfea8f41404e90cd46455734b529'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'collateral_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b4d220e383b440aa149c871b49aac2e'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5be1b49a2f0f4de985cb50d54a22c4fc'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'date_of_birth'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5c6af00ddecf4952b7d385461eb9cc5c'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                            value: 'education'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e7bb4d27f864b5fbeafc15326e76dec'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_category'
                            value: 'mortgage'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5fa80a3418e74d71b834f59262523be1'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'verification_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '60af2598d835449681a199e2ad639e4f'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'income_verification_required'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60b71af84ba148dab4cec89c7638e96f'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'base_interest_rate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '60e8ad1a08334b408e5d64f692ac3f07'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'documents_verified'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61daa66c4ff8483083b02ac2c3393525'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_method'
                            value: 'check'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61edcfd8803148269cd0b236eee123de'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'years_employed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '626317767d5e41828b4e2b40b448821c'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'customer_status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62893a03d92f461ab680a1d2daa90ded'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'risk_category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '629ac011f82648058b4708fe0bd3a781'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_method'
                            value: 'ach'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '646750d5a90c4e409223f5b357ebb55f'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '654e057de2b940b892c58359090846a0'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'verification_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6694423f993542baa1de620c50553259'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'payment_history_score'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '671a496622a44538bd23cfb833bf7658'
                        key: {
                            application_file: '281df1f4a7ec488da7e18a2e8abcd30e'
                            source_artifact: 'c4f06ce44eb1440aaaa0bef40d99e96d'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '682065e157c34141afc4cd55cbb00e57'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'available_credit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6861b9fe54914e0fb2dee3cdbf3e2121'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'min_credit_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '688dfc08073b47f3aaeb8910eb4453e5'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68fae7ddf5e0460695a8b1f178d1f4ff'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'income_verification_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69caeeda9be44400859fb9d6085c9585'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6a6cd3b565604f62b63ae26f23cd57aa'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                            value: 'debt_consolidation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ab2dca5d3cb4c9aa94e06298843f513'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b87dab96e4b46dcab276e7694ed30a1'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'verification_method'
                            value: 'hard_pull'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6ce0004b3ea54101a446e4ebd6139ea2'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_status'
                            value: 'under_review'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '6d1bf62de2f642cebf7e49a9e2a43b33'
                        key: {
                            category: 'x_snc_cash_loan_wi_loan_application'
                            prefix: 'LOAN'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6de15770e6574b329a7ffbd3b773a07b'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_method'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ff52885bcc44256b151d23af54dff78'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'interest_amount'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6ff69efe8c304e52b8d5f199391a70dd'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72b2e786088a4ab4ba7dd97a44eee949'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'verification_status'
                            value: 'verified'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '739969d160f34b89b4c5bf85c1cfcff3'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                            value: 'medical_expenses'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7406d74f1ce6417d81c8a3eb8a5faa7e'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '751535ad8aee4edb99cebe0f745ff6e8'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '757c9a22d8084561aedaae4d3d0d18b2'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'credit_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '79c7223579474991a08d159082c8df7c'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '79d786f82dbb4470b15b05ee039b50fb'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'remaining_balance'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a029c4465c0458789f17a15dc2a9444'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'term_months'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a233841c513464489999c5098681e18'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'approved_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a99514467b84d2fa8d0cbd002a704d0'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employer_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b05c1319633407ba6131ee7367d8f93'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bb1bd802c0a4214ad5a6e51508fcfe2'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c584182f59a4b679cd11b9992843ba6'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'max_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7cac42f1d1dd4126b20dcf00ab12a61e'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'address_line2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d6b09f93bb0445f832579774daba76a'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_method'
                            value: 'wire_transfer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '86050d2d01a842628b231c00656ac218'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '864c4f94ae9443a48c541f63cbccfebf'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'credit_score'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8738f496ddf6403ca5286310e31125e1'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_status'
                            value: 'partial'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '883099a06a4e40a09d2dc02d547bd66d'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8bbb0e7c7cf14488a4e51ef4914a4eab'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'number_of_accounts'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8c2937387b9c4b9084feb76513f0e293'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'customer_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8eb90fac62fc4184b00ad9ffb122e917'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fdf1ae7c77341629d617e24b6531903'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'late_fee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '90bd5256e81c418ea4d12a8635bd3475'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '90f38f5125804beaa46037cbbce71dcb'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'min_amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '925f9d90c3624246bd3ece3e8a068709'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'min_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93290954b9724c7f9696af226ff80753'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_status'
                            value: 'funded'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94919e365ae1474680d632c856fc3c77'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'score_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9a84de242c014700be07aaa6273af965'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a91a8e35a2f465f892c417954a5fb72'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9aa5a12defd74da2a8524fdc5304e5f7'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'actual_payment_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9ace317c654845158df7dba791a705cb'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c95c3628c5648f391e6ecbf924c2c0c'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'debt_to_income_ratio'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0c3d640178a4461889cb24c4b99c9e9'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'rejection_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a23da721f0764976adfb47a22a168889'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'remaining_balance'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3841edfb99347b3952495b7b1a1001e'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'term_months'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a44df1a0847246fd847bd25dd2b57772'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'a466b091562a44dd80e5c3280ba2a48f'
                        key: {
                            category: 'x_snc_cash_loan_wi_customer'
                            prefix: 'CUST'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a74f3aef8a20463b9990ab4c0769859a'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7ff3bb125ec4f6d97ae1594421750f1'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'interest_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a863e26412e7441397592f3557da0dd3'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employment_status'
                            value: 'self_employed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8a41150690b48c3abaf3d9adb1a55b7'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_status'
                            value: 'skipped'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aafcd98a67b04fe1b15c636d76fc9f9b'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'collateral_description'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ab9147d10de047e9b64f33bf7ba5b458'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'abf1f857489249ec8cd0735b0f7e2014'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_method'
                            value: 'cash'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'adb7b6971d6348a3b128c127deb6ab1f'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                            value: 'vacation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae1078790da84f1ba4610ca3c55e522b'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_bureau'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2390efd34ca40c6b792863c394b040e'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b2de48e3976742218ac0c03b3a384952'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_category'
                            value: 'personal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4068091b7644b7684c7d6f301e70a1f'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_rating'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b41aef0696c84c949e499959eb4b9ffb'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4d5f16662914874a0e30d37bfabcbaf'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_rating'
                            value: 'poor'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b572bd84322b448289e1fd1cb7bce6af'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b88d90bb75014365823a61f33cba71aa'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'monthly_payment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b971daece6464de3abc9f2b5f4d2d4b5'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_utilization'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b99e4b551eae487a8f77738021019986'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'funding_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9a76c60c4944bec82898cbd1f347f7f'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'baf5a37c63fe442e8fa5307308b65ecb'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bbabb2bc2bd045528c2a7c7fbceef4d4'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'first_payment_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be6ec1c89dd444e8827f7e54fd3dec40'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'total_amount_payable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf9e07520ea6477eb4c0f0fa77632144'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'debt_to_income_ratio'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfc018a2eaae444997bae24687fc61a8'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0aa7e7d4a6f40f2946617bd2cae3333'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2fb39bcbebf4a98aa25bcd24054822a'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employment_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: 'c4f06ce44eb1440aaaa0bef40d99e96d'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_app.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5953eb73de642a89d1426dd7cf92b07'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'loan_application'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5b52ce202e9488abc3ba58ff1c87b61'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c84456c10a204d4eae1cf2df980f6bb1'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'risk_category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8bc562003374db7ab9d3de75b61954f'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'zip_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca3d4d7cc3fc46d09680922c4c08c303'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'requested_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ca674d0d7b5d488e86a49d4223681ac8'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employment_status'
                            value: 'employed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'caae7c4ebc7b4183af9589abf052029c'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc94ce0162de4aa5adf81074304324c9'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'monthly_payment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd962fa7b85047f1ae5359430dab2ba0'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce0116570599435a8d5ce114a3dfb818'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cef9f077a8c846adb3fe570b86447bef'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd093345731dc440faffcd01f0d4bc98c'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'approved_amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd145d141948a4f65a41ec61df447030c'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'transaction_reference'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2cd5ba57c20448982e16ead28f079b2'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                            value: 'business'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd34d0c3453df4c8aae0ced3dd70f9b20'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3c322b933344c44b254259583f4d284'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'product_code'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd4df295454c143a7a586a52e2bf72b16'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd6a71a6b8001452f8c8b0535e7fc576a'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'verification_status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd6f60ba4db924b5397a31fef80bbcd11'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd72fb8f80ce44496bbb81959b2a69b1a'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_method'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd74727f081eb4eba8cc076364b254d35'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_purpose'
                            value: 'major_purchase'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7d4459186cb47cbb5a7c7b588c2eb14'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd8e30bcc75db458bb134c19e92b5f448'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'risk_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd917a7e2638846818e44a1f25c9397eb'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employment_status'
                            value: 'retired'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da6409f9a8e947c485426d86d7708071'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'term_months'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db68923c19b647d2a65e7588a025df93'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_bureau'
                            value: 'equifax'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db696a5f56fb48b2a3d97d537f0856fe'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'recent_inquiries'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dba569a4629344b4b2aeca142c9b7e4b'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'years_employed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dca9dc3e7d5d4a4b8d6a1ef590246726'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'actual_payment_amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcf56a8753e4490fb46a24b9368f426f'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd80ddc41c7f4723b9632206b1d2b7db'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_product'
                            element: 'max_amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de222cc60445461ca0d5d740ece56cbf'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'principal_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e25cba62397b4f07a61aa4ae109a4882'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'decision_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3a77b2ff18c46489d00cdb26eeeb0f0'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'annual_income'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e42a6f8cd81f4525940742686c0e5a95'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'e4585d822fff449dac4f574de2f76b76'
                        key: {
                            name: 'x_snc_cash_loan_wi/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e605ed2beeed4e518b745da025c669ca'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e6819d42a0da4e4891401ba787614c8c'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7775939ae27424c979c296fce6c0871'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'documents_verified'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e81865c3c4064b8092ad18ddf81a51bb'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'term_months'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8319380766f445f9c3f9500588a0953'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'loan_application'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e87b22b495bb482ebaf987fc24673ca1'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e98657bdfb3545cfafb7d578416e7033'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'verification_method'
                            value: 'third_party'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e9d4aa028d214c1d9c4d1f6ad5ac38ac'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'total_debt'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9f6f635baa74b618b68ad84901f95c9'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'date_of_birth'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb962295b4264962b064065aee9f64da'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'annual_income'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eddec6a100004aec915656500eeae9bc'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'customer_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee2889982c6b4ef984cd561249b223d7'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f09783c5fc7041b8bf51ad7a75e3e9d2'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'funding_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1c1757b837d457ea47a7cee061eaa15'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_product'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f4a51ca5933941c7a67fc94735ef918c'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'verification_method'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4a5d8b1b42346e7b3be8696cb89b969'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'application_status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f7e7c83fa2304f3a8da086b60434908c'
                        key: {
                            name: 'x_snc_cash_loan_wi_credit_score'
                            element: 'credit_bureau'
                            value: 'transunion'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f862427dac684922b32d833614f14d08'
                        key: {
                            application_file: 'e4585d822fff449dac4f574de2f76b76'
                            source_artifact: 'c4f06ce44eb1440aaaa0bef40d99e96d'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8a699f668cb42ae91f6195f2d431f6b'
                        key: {
                            name: 'x_snc_cash_loan_wi_customer'
                            element: 'employment_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fbee1eec77ca4b0ca7a828542044a515'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'payment_method'
                            value: 'credit_card'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc08d522b2c5476fa2ea4e1e8871d55c'
                        key: {
                            name: 'x_snc_cash_loan_wi_payment_schedule'
                            element: 'late_fee'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd18c308b9434905b2d9370f0b887f9b'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'loan_product'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe1c878b077e4d2ba76901a75fb72f30'
                        key: {
                            name: 'x_snc_cash_loan_wi_loan_application'
                            element: 'income_verified'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
